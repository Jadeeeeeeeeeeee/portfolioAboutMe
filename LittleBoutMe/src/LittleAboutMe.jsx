import React, {useState} from "react";

function LittleBoutMe() {

    const [click, setClicks] = useState(1);

    function switchPlaces() {
        let Me = document.getElementsByClassName("Me")[0];
        let favgames = document.getElementsByClassName("favoriteGames")[0];
        let hobby = document.getElementsByClassName("hobbys")[0];
        if (click == 1) {
            Me.style.left = "60%";
            Me.style.top = "40%";
            favgames.style.left = "40%";
            favgames.style.top = "70%";
            hobby.style.left = "20%";
            hobby.style.top = "40%";
            setClicks(2);
        }else if (click == 2) {
            Me.style.left = "40%";
            Me.style.top = "70%";
            favgames.style.left = "20%";
            favgames.style.top = "40%";
            hobby.style.left = "60%";
            hobby.style.top = "40%";
            setClicks(3);
        }else if (click ==3 ) {
            Me.style.left = "20%";
            Me.style.top = "40%";
            favgames.style.left = "60%";
            favgames.style.top = "40%";
            hobby.style.left = "40%";
            hobby.style.top = "70%";
            setClicks(1);
        }
    }

    return(<>
    <div className="MainLittleBoutMe">
        <div className="header">
        <h1>About me</h1>
        </div>
        <div className="Me" onClick={switchPlaces}>
        <p>hello im jadeYeti a -18 web dev proggraming in js html css and using react, i am also learning c# for unity whice is very fun, i started proggraming when i was 10 and ever since that ive been learning new languages and making more projects.</p>
        </div>
        <div className="favoriteGames" onClick={switchPlaces}>
        <p>some games i like: rainbow six siege , scp sl , stardew vally, asseto corsa, mortal kombat and jedi fallen order</p>
        </div>
        <div className="hobbys" onClick={switchPlaces}><p>some hobbys i like: proggraming , playing video games and playing the electric guitar</p>
        </div>
    </div>
    </>);
}

export default LittleBoutMe