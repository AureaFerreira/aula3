const Events = () =>{

    const handleyMyEvent =(e) => {
        console.log(e);

        console.log("Ativou o evento");
};
    const renderSomething = (x) => {

        if(x){

            return (
                <h1>Renderizando  isso ! </h1>
            )
        } else {
            return(
                <h1>Tbm</h1>
            )

        }
    }

// a diferença do constante para o log o const ele repete o nome da função de acordo com cada click e o log só conta qunatas vezes foi clicado
    return(
        <div>
            <div>
                <button onClick ={handleyMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick = {() => console.log("Clicou!")}>Clique aquiTbn </button> 
                <div>
                <button onClick={ () => {
                    if(true) {
                        console.log("Isso não devia existir")
                    } } }>Clica aqui Please</button>
                </div>
            </div>
                 {renderSomething(true)}
                 {renderSomething(false)}   
        </div>
    );

};

export default Events;
