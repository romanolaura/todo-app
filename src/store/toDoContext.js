import React from "react";

const TodoCtx = React.createContext({
    list: [],
    addItem: (_description) => {},
    markComplete: (_id) => {}
})

export default TodoCtx;