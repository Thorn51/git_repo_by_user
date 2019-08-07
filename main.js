"use strict";

// User enters GitHub handle
// User clicks on search button
function searchForHandle() {
  $(".search-button").on("click", function(event) {
    event.preventDefault();
    let $searchHandle = $("#search-handle-input").val();
    console.log($searchHandle);
    fetchUserRepos($searchHandle);
  });
}

// Search terms converted to endpoints
function createEndPoints() {}

// Fetch repositories based on search term endpoint
function fetchUserRepos(search) {
  const gitApiUrl = "https://api.github.com/users/";
  let fetchUrl = `${gitApiUrl}${search}/repos`;
  console.log(fetchUrl);
  fetch(fetchUrl).then(function(response) {
    return response.json().then(function(responseJson) {
      console.log(responseJson);
    });
  });
  // pass authentication tokens as o oAuth in header
  // catch errors
}

// Manipulate DOM to display results
function displayReposInDom() {}

// DOM Ready for manipulation
$(document).ready(function() {
  console.log("App ready, waiting for search terms!");
  searchForHandle();
});
