
const linkObject = [
    {
        v1: "bg0.png",
        v2: "bg1.png",
        v3: "bg2.png",
        v4: "bg3.png",
        v5: "bg4.png",
        v6: "bg5.png",
        v7: "bg6.png",
        v8: "bg7.png",
        v9: "bg8.png",
    },
    {
        v1: "golf0.png",
        v2: "golf1.png",
        v3: "golf2.png",
        v4: "golf3.png",
        v5: "golf4.png",
        v6: "golf5.png",
        v7: "golf6.png",
    },
    {
        v1: "coverage.PNG",
        v2: "coverage2.png",
        v3: "coverage3.png",
        v4: "coverage4.png",
        v5: "coverage5.png",
        v6: "coverage6.png",
        v7: "coverage7.png",
    },
    {
        v1: "food0.png",
        v2: "food1.png",
        v3: "food2.png",
        v4: "food3.png",
        v5: "food4.png",
        v6: "food5.png",
        v7: "food6.png",

    },
    {
        v1: "hp0.png",
        v2: "hp1.png",
        v3: "hp2.png",
        v4: "hp3.png",
        v5: "hp4.png",
        v6: "hp5.png",
    },
    {
        v1: "j0.png",
        v2: "j1.png",
        v3: "j2.png",
        v4: "j3.png",
        v5: "j4.png",
        v6: "j5.png",
        v7: "j6.png",
        v8: "j7.png",
        v9: "j8.png",
        v10: "j9.png",
    }, {
        v1: "qt00.jpg",
        v2: "qt0.png",
        v3: "qt1.png",
        v4: "qt2.png",
        v5: "qt3.png",
        v6: "qt4.png",
        v7: "qt5.png",
        v8: "qt6.jpg",
        v9: "qt7.jpg",
        v10: "qt01.jpg",

    }, {
        v1: "ros0.jpg",
        v2: "ros1.jpg",
        v3: "ros2.jpg",
        v4: "ros3.jpg",
        v5: "ros4.jpg",
        v6: "ros5.jpg",
    }, {
        v1: "sc0.png",
        v2: "sc1.png",
        v3: "sc2.png",
        v4: "sc3.png",
        v5: "sc4.png",
        v6: "sc5.png",
        v7: "sc6.png",
        v8: "sc7.png",
    },
    {
        v1: "sm0.png",
        v2: "sm1.png",
        v3: "sm2.png",
        v4: "sm3.png",
        v5: "sm4.png",
    },
    {
        v1: "ip0.jpg",
        v2: "ip1.jpg",
        v3: "ip2.jpg",
        v4: "ip3.jpg",
        v5: "ip4.jpg",
        v6: "ip5.jpg",
        v7: "ip6.jpg",
    },
    {
        v1: "tt0.png",
        v2: "tt1.png",
        v3: "tt2.png",
        v4: "tt3.png",
        v5: "tt4.png",
    },
    {
        v1: "checkin1.png",
        v2: "checkin2.png",
        v3: "checkin3.png",
        v4: "checkin4.png",
        v5: "checkin5.png",
        v6: "checkin6.png",
    },
    {
        v1: "elevator1.jpg",
        v2: "elevator2.jpg",
        v3: "elevator3.jpg",
        v4: "elevator4.jpg",
        v5: "elevator5.jpg",
        v6: "elevator6.jpg",
        v7: "elevator7.mp4",
    },
    {
        v1: "javalib.png",
    },
    {
        v1: "arm1.png",
        v2: "arm2.png",
        v3: "arm3.png",
    },
];
const codeStr = new Encode();
const onSendImage = () => {
    const links = document.querySelectorAll(".card-work .document a[href='#']");
     const linklen = links.length;
    for (let i = 0; i < linklen; i++) {
        let params = "";
            params = "./slider.html?"
        try {
            for (const key in linkObject[i]) {
                const _encode = codeStr.encode(linkObject[i][key]);
                params += `${key}=${_encode}&`;
            }
            params = params.slice(0, -1)
            links[i].href = params;
        } catch (error) {
            console.log('error', error);
        }

    }
}


