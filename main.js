"use strict";

// User enters GitHub handle
// User clicks on search button
function searchForHandle() {
  $(".search-button").on("click", function(event) {
    event.preventDefault();
    let $searchHandle = $("#search-handle-input")
      .val()
      .toLowerCase();
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
  fetch(fetchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(responseJson) {
      displayReposInDom(responseJson);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Manipulate DOM to display results
function displayReposInDom(responseJson) {
  // $('.repo-list')
  let repoListHtml = "";
  console.log(responseJson);
  $(".repo-list-ul").append(
    `<h3>GitHub Repositories by <a href="${responseJson[0].owner.html_url}"}>${
      responseJson[0].owner.login
    }</a></h3>`
  );
  for (let i = 0; i < responseJson.length; i++) {
    $(".repo-list-ul").append(
      `<li><a href="${responseJson[i].html_url}">${
        responseJson[i].name
      }</a></li>`
    );
  }
}

// DOM Ready for manipulation
$(document).ready(function() {
  console.log("App ready, waiting for search terms!");
  searchForHandle();
});
