const TemplateExpressions = () => {

    const name = "AureA" ;
    const data = {
        age: 19,
        job: "Administrative assistant",
    };

    return (
        <div>

            <h1>Olá, {name}, tudo bem?</h1>
            <p>Você atua como?{data.job}</p>
            <p>Qual a sua idade? {data.age}</p>
            
        </div>
    )

}

export default TemplateExpressions 