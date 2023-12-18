function hideProjectInformationPanel() {
    console.log("Hello Scripts");
    var projectInfoPanel = document.querySelectorAll('.project-information-panel-container');
    console.log(projectInfoPanel);

    for (var i = 0; i < projectInfoPanel.length; i++) {
        projectInfoPanel[i].style.display = "none";
    }
}

