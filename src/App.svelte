<script>
    import { login } from "./api.ts";
    import MeteorsBgAnimation from "./components/MeteorsBgAnimation.svelte";
    import ErrorMessage from "./components/ErrorMessage.svelte";
    import LoginForm from "./components/LoginForm.svelte";

    let email = $state("");
    let password = $state("");
    let errorMessage = $state("");
    let isPending = $state(false);

    const reset = () => {
        email = "";
        password = "";
        errorMessage = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        isPending = true;

        try {
            const res = await login(email, password);
            if (res.status === 200) {
                alert("You are logged in!");
                reset();
            } else {
                errorMessage = res.statusText;
            }
        } catch (error) {
            errorMessage = "Ooops... Something went wrong. Please try again.";
        } finally {
            isPending = false;
        }
    };
</script>

<MeteorsBgAnimation amount={25} />
<main>
    <LoginForm
        bind:email
        bind:password
        bind:isPending
        {reset}
        onsubmit={handleSubmit}
    />
    <ErrorMessage bind:errorMessage />
</main>

<style>
    main {
        display: flex;
        min-height: 100dvh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
