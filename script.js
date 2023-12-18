window.onload = function(){
    var projectRAH = document.querySelectorAll('.switch-rah');
    var projectNYCB = document.querySelectorAll('.switch-nycb');
    var projectMTC = document.querySelectorAll('.switch-mtc');

    projectRAH.onclick = flyToRAH;

    function flyToRAH() {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-0.182, 51.50, 7000000.0)
        });
        return dynamicRate = 0.0;
    }
}