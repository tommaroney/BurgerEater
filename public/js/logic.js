$(document).ready( () => {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(".burgerButton").click((event) => {
        console.log("here");

        let change = { id: event.target.value,
                       state: true
                     }

        console.log(change);

        $.ajax({
            method: "PATCH",
            data: change,
        }).then(response => location.reload());
    });

    $("#burgerMaker").click((event) => {
        $.ajax({
            method: "POST",
            data: {name: $("#newBurger").val()}
        }).then(response => location.reload());
    });

    const inputClick = () => {
        $("input.burgerTitle").keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                
                $.ajax({
                    method: "PATCH",
                    data: { id: $(this).data("number"),
                            name: $(this).val()
                        }
                }).then(response => location.reload());   
            }
        });
    }

    const inputChangeEvent = (replacement) => {
        $(".burgerTitle").focusout(event => {
            const burgerNameSpan = $(event.target).replaceWith(replacement);
            $(replacement[0]).click(bNameClick);
        });
    }

    const bNameClick = () => {
        console.log("here");
        let originalElement = $(event.target);
        const number = originalElement.data("number");
        const text = originalElement.data("name");
        $(event.target).replaceWith(`<input type="text" id="selectedBurger" class="burgerTitle" data-number=${number} value=${text} />`);
        $("#selectedBurger").focus();
        inputClick();
        inputChangeEvent(originalElement);
    }

    $("div.burgerHolder span.bName").click(bNameClick);
});

{/* <input type="text" class="burgerTitle" data-number={{id}} id="burger{{id}}" value= "{{id}}. {{burger_name}}"/> */}
