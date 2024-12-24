
    function test() {
        console.log('test');

        calibrateButton = document.getElementById('calibration-feedback');
        calibrateButton.remove();

        // Calibration setup
            const calibrationArea = document.getElementById("calibration-area");
            var height = document.body.clientHeight;
            var width = document.body.clientWidth;
            // console.log("Width: " + width + " height: " + height);
            const points = [
                { x: width / 8, y: height / 8 },
                { x: width / 2, y: height / 8 },
                { x: width / 8 * 7, y: height / 8 },
                { x: width / 8, y: height / 2 },
                { x: width / 2, y: height / 2 },
                { x: width / 8 * 7, y: height / 2 },
                { x: width / 8, y: height / 8 * 7 },
                { x: width / 2, y: height / 8 * 7 },
                { x: width / 8 * 7, y: height / 8 * 7 },
            ];
    
            points.forEach((point, index) => {
                const div = document.createElement("div");
                div.className = "calibration-point";
                div.style.left = `${point.x}px`;
                div.style.top = `${point.y}px`;
                div.addEventListener("click", () => {
                    console.log(`Clicked on point ${index + 1} at (${point.x}, ${point.y})`);
                    webgazer.recordScreenPosition(point.x, point.y); // Train WebGazer model
                    div.style.backgroundColor = "green"; // Mark as clicked
                });
                calibrationArea.appendChild(div);
            });
    }

    // function initTracker() {
        // document.getElementById('calibration-area').addEventListener('load', function() {
        //     // Enable webgazer to allow calibration
        //     console.log('reached');
        //     // webgazer.setGazeListener((data, elapsedTime) => {
    
        //     //     if (data) {
        //     //         console.log(`X: ${data.x}, Y: ${data.y}`);
        //     //     }
        //     // }).begin();
    
        //     // Enable data persistence
        //     // webgazer.saveDataAcrossSessions(true);
            
        //     // Webgazer settings
        //     // webgazer.showVideo(false).showFaceOverlay(false).showFaceFeedbackBox(false);
    
        //     // Calibration setup
        //     const calibrationArea = document.getElementById("calibration-area");
        //     var height = document.body.clientHeight;
        //     var width = document.body.clientWidth;
        //     // console.log("Width: " + width + " height: " + height);
        //     const points = [
        //         { x: width / 8, y: height / 8 },
        //         { x: width / 2, y: height / 8 },
        //         { x: width / 8 * 7, y: height / 8 },
        //         { x: width / 8, y: height / 2 },
        //         { x: width / 2, y: height / 2 },
        //         { x: width / 8 * 7, y: height / 2 },
        //         { x: width / 8, y: height / 8 * 7 },
        //         { x: width / 2, y: height / 8 * 7 },
        //         { x: width / 8 * 7, y: height / 8 * 7 },
        //     ];
    
        //     points.forEach((point, index) => {
        //         const div = document.createElement("div");
        //         div.className = "calibration-point";
        //         div.style.left = `${point.x}px`;
        //         div.style.top = `${point.y}px`;
        //         div.addEventListener("click", () => {
        //             console.log(`Clicked on point ${index + 1} at (${point.x}, ${point.y})`);
        //             webgazer.recordScreenPosition(point.x, point.y); // Train WebGazer model
        //             div.style.backgroundColor = "green"; // Mark as clicked
        //         });
        //         calibrationArea.appendChild(div);
        //     });
        // })