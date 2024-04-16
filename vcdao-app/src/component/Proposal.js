import react from "react";
import "../App.css";
import "../styles/Proposal.css";

function Proposal({ type }) {
    // if (type === 'add') {
    //     return (
    //         <div className="proposal add-proposal">
    //             <div className="board">
    //                 <div className='add-content'>+</div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="proposal">
            <div className="board">
                <div className="board-header">
                    <p>Project Name</p>
                </div>
                <div className="board-body">
                    <img className="project-img" src="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="></img>
                    <p>Website Link : </p>
                    <p>comment : </p>
                    <p>total allocation : 100ETH(10%)</p>
                    <div className="price">
                        <input className="price-input" />
                        <p>NFT</p>
                    </div>
                    <div className="board-footer">
                        <button className='proposal-button'>
                            Fire logo
                        </button>
                    </div>
                    <div className="board-add">

                    </div>

                </div>
            </div>

            <div className="board">
                <div className="add-content">
                    <button className="proposal-button">
                        +
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Proposal;