if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

document.querySelector("iframe").addEventListener('load', () => {
    let video = document.querySelector("iframe").contentDocument.querySelector("video#test_player_html5_api");

    video.addEventListener("ended", () => {
        if (Notification.permission === "granted") {
            let noti = new Notification("한경대학교 사이버캠퍼스", { body: "강의가 종료되었습니다." });
        } else {
            alert("강의가 종료되었습니다.");
        }
    });
})
