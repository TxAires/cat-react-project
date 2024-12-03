import React from 'react';
import './cat_Generator_Page.css'

const Cat_Box_Right = ({ CatFact, handleRemoveCatFact, handleAddCatFact }) => (
    <div className="column-fix col-md-6 col-sm-12">
        <div className="card tdw-cat">
            <h2>Random cat fact</h2>
            <div id="row_randomFact">
                {/* CatFact é um array com varios factos por isso preciso de os mapear */}
                {CatFact.map(facts => (
                    // a div key(...)  tem de estar no elemento que esteja mais de fora se não, não estava a funcionar.
                    <div key={facts.id}>
                        {/* aqui mete o botao para remover o facto */}
                        <input
                            type="button"
                            value="x"
                            id="buttonRemove"
                            onClick={() => {
                                handleRemoveCatFact(facts.id)
                            }}
                        />
                        {/* aqui mostra o texto do facto */}
                        <span>{facts.fact}</span>
                        <p />
                    </div>
                ))}
                <input
                    type="button"
                    value="Add Cat Fact"
                    id="buttonFacts"
                    onClick={() => {
                        handleAddCatFact()
                    }}>
                </input>
            </div>
        </div>
    </div>
);

export default Cat_Box_Right;