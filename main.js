const streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
const baseAPI = "https://twitch-proxy.freecodecamp.rocks/";

window.onload = function() {
    const container = document.getElementById('streamers');

    streamers.forEach((streamer) => {
        let url = `${baseAPI}helix/streams?user_login=${streamer}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let a = document.createElement('a');

            a.href = `https://www.twitch.tv/${streamer}`;
            a.target = '_blank';
            a.textContent = streamer;

            if (data.data.length === 0) {
                p.textContent = 'Offline';
            } else {
                p.textContent = 'Online: ' + data.data[0].title;
            }

            div.appendChild(a);
            div.appendChild(p);
            container.appendChild(div);
        });
    });
}
