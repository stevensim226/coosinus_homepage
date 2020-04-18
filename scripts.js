$(function() {
    var tabButtons = $(".tab-button")
    var tablePictures = $(".table-mobile")

    tabButtons.click((e) => {
        var foundText = $(e.target).find("h5").text()
        var target = e.target
        if (foundText == "") {
            foundText = $(e.target.parentElement).find("h5").text()
            target = e.target.parentElement
        }
        
        $(target).addClass("selected-table-tab-mobile")
        switch (foundText) {
            case "Bimbel Jadul":
                $(tabButtons[1]).removeClass("selected-table-tab-mobile")
                $(tablePictures[1]).removeClass("selected-table")
                $(tablePictures[1]).addClass("not-selected-table")
                $(tablePictures[0]).removeClass("not-selected-table")
                break
            case "Coosinus":
                $(tabButtons[0]).removeClass("selected-table-tab-mobile")
                $(tablePictures[0]).removeClass("selected-table")
                $(tablePictures[0]).addClass("not-selected-table")
                $(tablePictures[1]).removeClass("not-selected-table")
                break
        }
    })

    // Profile
})