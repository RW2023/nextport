import React from 'react'

function Card() {
    return (
        <div>
            <div className="card card-side bg-slate-400-100 shadow-xl">
                <figure><Image src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on JetFlix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card