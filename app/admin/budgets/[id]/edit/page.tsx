import * as React from "react";

export default function EditBudgetPage({params} : {params: {id: string}}) {

    const { id } = React.use(params);
    console.log(id);
    
    return (
        <div>
        EditBudgetPage
        </div>
    )
}
