function main(result) {
    console.log(result)
    document.getElementById("filename").value = result[0].match(/[a-z0-9]*$/)[0] + ".mp4"

    document.getElementById("download").addEventListener("click", function () {
        let filename = document.getElementById("filename").value;
        browser.downloads.download({ url: result[0], filename: filename })
    });
}

function error() {
}

browser.tabs.executeScript({ code: 'document.querySelector("iframe").contentWindow.document.getElementById("test_player_html5_api").getElementsByTagName("source")[0].getAttribute("src");' })
    .then(main)
    .catch(error);