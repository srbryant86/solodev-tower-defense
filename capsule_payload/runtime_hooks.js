// Hook system for DSL or GUI injections
const runtimeHooks = {
    onStart: () => console.log("Runtime start hook fired."),
    onPause: () => console.log("Runtime pause hook."),
    onResume: () => console.log("Runtime resume hook.")
};
