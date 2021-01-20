---
  title: github - issues
---

/**
 * Gantt chart generated from GitHub Issues.
 *
 * Functions used to extract, transform and load GitHub Issues and generate an SVG Gantt Chart.
 */



/** TODO: refresh data from github api 
 * Minimize refresh to manual or once an hour
 * This can be validated with Rate Limit status
 * and comparing remaining request
 * if (limit === remaining) {refresh_data}
 * https://docs.github.com/en/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user
 */
/*
const octokit = new Octokit();

let owner = "sara-sabr";
let repo = "ITStrategy"

octokit.request('GET /repos/{owner}/{repo}/issues', {
  owner: 'sara-sabr',
  repo: 'ITStrategy'
})

var issues = octokit;
*/


/**
 * Array of issues from GitHub
 */
var issues = {{ site.data.issues | jsonify }};
var labels = {{ site.data.labels | jsonify }};

//console.log(issuesWithMilestones(issues));

console.log(issuesWithInitiative(issues));


/**
 * Helper function listing the issue number of issues containing a milestone.
 * @param {Array} issues An array of issues generated from GitHub API.
 * @returns {Array} An array of strings containing issues number.
 */
function issuesWithMilestones(issues) {
  let issuesWithMilestones;
  let temp = issues
    .filter(issue => {
      return issue.milestone != null;
    })
    .map(issue => {
      return issue.number;
    });
  issuesWithMilestones = temp[0];
  return issuesWithMilestones;
}

/**
 * Helper function listing the issue number of issues containing at least one label.
 * @param {Array} issues An array of issues generated from GitHub API.
 * @returns {Array} An array of strings containing issues number.
 */
function issuesWithLabel(issues) {
  let issuesWithLabels = issues
    .filter(issue => {
      return issue.labels.length > 0;
    })
    .map(issue => {
      return issue.number;
    });
  return issuesWithLabels;
}

/**
 * Helper function listing the issue number of issues containing a milestone.
 * @param {Array} issues An array of issues generated from GitHub API.
 * @returns {Array} An array of strings containing issues number.
 */
function issuesWithoutMilestones(issues) {
  let issuesWithoutMilestones = issues
    .filter(issue => {
      return !issue.milestone == null;
    })
    .map(issue => {
      return issue.number;
    });
  return issuesWithoutMilestones;
}

/**
 * Helper function listing the issue number of issues containing at least one label.
 * @param {Array} issues An array of issues generated from GitHub API.
 * @returns {Array} An array of strings containing issues number.
 */
function issuesWithoutLabels(issues) {
  let issuesWithoutLabels = issues
    .filter(issue => {
      return issue.labels.length == 0;
    })
    .map(issue => {
      return issue.number;
    });
  return issuesWithoutLabels;
}

/**
 * Helper function validating if an issue has a single initiative associated to it.
 * @param {Object} issue An issue generated by GitHub.
 * @returns {boolean}
 */
function hasInitiative (issue) {
  let labelName;
  issue.labels.forEach(name =>{

  })
  return ;
}

/**
 * Helper function listing the issue number of issues that are linked to a single Initiative.
 * @param {Array} issues An array of issues generated from GitHub API.
 * @returns {Array} An array of strings containing issues number.
 */
function issuesWithInitiative(issues) {
  let issuesNumber = issuesWithLabel(issues);
  let issuesToFilter = []
  issuesNumber.forEach(issue => {
    
    issuesToFilter.push(issueByNumber(issues, issue));
  });
  return issuesToFilter;
}

/**
 * Helper function to return a single issue by its number.
 * @param {Array} issues An array of issues generated from GitHub API.
 * @param {number} issueNumber The number of the issue to return.
 * @returns {Object} A GitHub issue object.
 */
function issueByNumber(issues, issueNumber) {
  let issueByNumber = issues.find(issue => {
    return issue.number === issueNumber;
  })
  return issueByNumber;
}


/**
 * TODO:
 * issuesWithInitiative(issuesWithLabels)
 * issuesForGantt(issuesWithInitiativesandMilestones) returns qualifiedIssues
 * getMilestoneDates(qualifiedIssues)
 *
 * TBC - issuesExceptions() --> issues linked to multiple initia
 * TBC - filterMilestonesWithoutIssues()
*/

//Need to validate how to handle when no unplanned issues
/*
function listIssuesWithoutMilestones(issues, milestones) {
  let unplannedIssues = issues.filter(issue => return !issue.hasOwnProperty("milestone"));
  return unplannedIssues;
}

const issuesSorted (issues, milestones) => {
  let issuesSorted = [];
  let todayDate = new Date();
}*/


//Temporary list of milestones and duration based on today
/*
function milestonesSorted(issues) {
  let issuesWithMilestones = listMilestonesFromIssues(issues);
  let todayDate = new Date();
  let milestonesList = [];
  let temp = []
  issuesWithMilestones.forEach(issue => {
    let duration = 0;
    let dueDate = new Date(issue.milestone.due_on);
    let title = issue.milestone.title;
    if (dueDate > todayDate) {
      duration = dueDate - todayDate;
    } else {
      duration = todayDate;
    }
    duration = duration / (4 * 7 * 24 * 60 * 60 * 1000);
    milestonesList.push([title, duration])
  })
  console.log(milestonesList);
  return milestonesList;
}

var data = milestonesSorted(issues);

var width = 600
scaleFactor = 20,
  barHeight = 30;

var graph = d3.select("#svgContainer")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length);

var bar = graph.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function (d, i) {
    return "translate(0," + i * barHeight + ")";
  });
bar.append("rect").attr("width", function (d) {
  return d[1] * scaleFactor;
})

  .attr("height", barHeight - 1);

bar.append("text")
  .attr("x", function (d) { return (d[1] * scaleFactor); })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(function (d) { return d[0]; });

/*

var svg = d3.select("#svg").append("svg").attr("viewBox", `0 0 300 600`)

for (let i = 0; i < 5; i++) {
  svg.append("rect").attr("x", 0).attr("y", i * 100).attr("width", 200).attr("height", 100).attr("fill", "white")
  svg.append("text").text(issues[i].title).attr("fill", "black")
}
*/