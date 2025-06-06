// source https://github.com/AHCorn/Bilibili-To-Raindrop

var delay = 500; // request interval (ms)
var gen = listGen();
var csvContent = "\uFEFF";
csvContent += "folder,title,url\n";

function getCSVFileName() {
  var userName = $("#h-name").text();
  return `fav_${userName}.csv`;
}

function getFolderName() {
  return $("#fav-createdList-container .fav-item.cur a.text").text().trim();
}

function escapeCSV(field) {
  return '"' + String(field).replace(/"/g, '""') + '"';
}

function getVideosFromPage() {
  var results = [];
  var folderName = getFolderName().replace(/\//g, "\\"); // replace "/" to "\" to avoid errors
  $(".fav-video-list > li > a.title").each(function () {
    var title = $(this).text().replace(/,/g, "");
    if (title !== "已失效视频") {
      var url = "https:" + $(this).attr("href");
      results.push(
        escapeCSV(folderName) + "," + escapeCSV(title) + "," + escapeCSV(url)
      );
    }
  });
  return results.join("\n");
}

function processVideos() {
  csvContent += getVideosFromPage() + "\n"; // auto new line
  if ($(".be-pager-next:visible").length == 0) {
    setTimeout(changeList, delay);
  } else {
    $(".be-pager-next").click();
    setTimeout(processVideos, delay);
  }
}

function* listGen() {
  for (var list of $("#fav-createdList-container .fav-item a").get()) {
    yield list;
  }
}

function changeList() {
  var list = gen.next().value;
  if (list) {
    list.click();
    setTimeout(processVideos, delay);
  } else {
    downloadCSV();
  }
}

function downloadCSV() {
  var fileName = getCSVFileName();
  var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  var url = URL.createObjectURL(blob);

  var win = window.open();
  if (win) {
    win.document.open();
    win.document.write("<html><body>");
    win.document.write(
      '<a href="' + url + '" download="' + fileName + '">direct download</a>'
    );
    win.document.write('<script>document.querySelector("a").click();</script>');
    win.document.write("</body></html>");
    win.document.close();
  } else {
    alert("allow popup to download");
  }
}

changeList();
