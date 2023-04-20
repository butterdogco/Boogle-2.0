<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://boogle.butterdogco.com/css/index.css">
  <link rel="icon" href="https://boogle.butterdogco.com/img/boogle_square.png">
  <title>Boogle</title>
  <meta name="description" content="boogle, the best search engine">
  <meta name="keywords" content="butterdog, butterdogco, butter dog co, bdog, bdogco, butterdogco.github.io, butterdogco.com, butterflix, bulu, buttertube, boogle, boogle search, boogle search engine, epic search engine, google rip off">
  <meta name="author" content="ButterDogCo">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<center>
  <header>
    <ul>
      <li><a class="signinbutton" href="#">Sign in</a></li>
      <li><a href="https://butterdogco.com/apps"><img class="apps" src="https://boogle.butterdogco.com/img/apps.webp" title="Boogle apps"></a></li>
      <li><a href="images">Images</a></li>
      <li><a href="https://mail.google.com">Bmail</a></li>
    </ul>
  </header>
  <div class="searchmain">
    <div class="logo">
      <img alt="Boogle" src="https://boogle.butterdogco.com/img/boogle.png" style="height: 150px;">
    </div>
    <div class="bar">
      <img class="icon" src="https://boogle.butterdogco.com/img/magnifying_glass.webp">
      <form autocomplete="off" method="get" action="https://search.butterdogco.com/_/search?query=">
        <div class="autocomplete">
          <input id="myInput" class="searchbar" type="search" name="query" title="Search Boogle" onkeypress="checkSubmit()" />
        </div>
    </div>
    <div class="buttons">
      <button class="button" type="submit">Boogle Search</button>
      </form>
      <a href="https://search.butterdogco.com/_/search?query=how%20to&scope=site&showTabs=false" class="button"
        type="button">I'm Feeling Lucky</a>
    </div>
  </div>
</center>
<div class="footer">
  <li class="left"><a href="about">About</a></li>
  <li class="left"><a href="https://butterdogco.com/advertising">Advertising</a></li>
  <li class="left"><a href="about">How Search works</a></li>
  <li class="right"><a href="themes">Themes</a></li>
  <li class="right"><a href="https://search.butterdogco.com/tos">Terms</a></li>
  <li class="right"><a href="https://search.butterdogco.com/pp">Privacy</a></li>
</div>

<!-- Autocomplete and enter to search -->
<script>
  function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*This is the stuff that autocompletes*/
var countries = ["calculator", "chats the time", "whats the date", "how  to read", "how to type", "color picker", "boogle", "google", "wikabedia", "buttertube", "butterflix", "bulu", "apps", "butter plus", "butterfiy", "butterfly", "spotify", "music", "entertainment", "butter os", "bbay", "webstore", "bweeter", "bik bok", "OOGA BOOGA", "boblox", "memes", "how light works", "how to change themes on boogle", "change themes boogle", "blue theme boogle", "boogle.com", "boogle", "sussy balls","how to read"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

</script>

</body>

</html>