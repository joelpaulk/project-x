function hideProjectInformationPanel() {
    var projectInfoPanel = document.querySelectorAll('.project-information-panel');
    if (projectInfoPanel.length > 0) {
        projectInfoPanel[0].style.display = "none";
    }

    var projectInfoPanelContainer = document.querySelectorAll('.project-information-panel-container');
    for (var i = 0; i < projectInfoPanelContainer.length; i++) {
        projectInfoPanelContainer[i].style.display = "none";
    }
}

