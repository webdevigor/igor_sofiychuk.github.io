let workers = {};

$(document).ready(function () {
	$("#modal-btn-add").on("click", addWorkers);
	//search
	$("#search").keyup(function () {
		_this = this;
		$.each($("tbody tr"), function () {
			if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
				$(this).hide();
				//$(this).css("background-color", "black");
			}
			else {
				$(this).show();
				//$(this).css("background-color", "#b3ffff");
			}

		});

	});
	// запрет ввода в инпутах
	$('[name=name],[name=position]').bind("change keyup input click", function() {
		 this.value = this.value.replace(/[^а-яА-Я\sa-zA-Z]/g,"");
	});
	
		getWorkers();
		//console.log(workers);
});


function getWorkers() {
	let save = localStorage.getItem("Workers");
	if (save) {
		workers = JSON.parse(save);
		for (let key in workers) {
			drawWorker(key);
		}
		//console.log(saveWorkers);
	}
}

function setWorkers() {
	localStorage.setItem('Workers', JSON.stringify(workers));
}

function addWorkers() {
	let formDate = $("form").serializeArray();
	//console.log(formDate);
	let arr = {};
	for (key in formDate) {
		arr[formDate[key]["name"]] = formDate[key]["value"];
	}
	//console.log(arr);
	let data = $(this).attr("data");
	if (data == undefined) {
		let random = Math.round(Math.random() * 1000);
		workers[random] = arr;
		//console.log(workers);	
		drawWorker(random);
	}
	else {
		workers[data] = arr;
		drawWorker(data);
	}
	//console.log(workers);
	$("#modal-add-workers").modal('hide');
	setWorkers();


}

function drawWorker(index) {
	let worker = $(".worker[data=" + index + "]");
	if (worker.length == 0) {
		let tr = document.createElement("tr");
		tr.className = "worker";
		tr.setAttribute("data", index);

		let tdName = document.createElement("td");
		tdName.className = "name ";
		tdName.innerHTML = workers[index]["name"];

		let tdDate = document.createElement("td");
		tdDate.className = "date ";
		tdDate.innerHTML = workers[index]["date"];

		let tdPosition = document.createElement("td");
		tdPosition.className = "position ";
		tdPosition.innerHTML = workers[index]["position"];

		let tdSalary = document.createElement("td");
		tdSalary.className = "salary ";
		tdSalary.innerHTML = workers[index]["salary"];

		let tdBtnEdit = document.createElement("td");

		let btnEdit = document.createElement('button');
		btnEdit.className = "btnEdit btn btn-secondary btn-sm";
		btnEdit.innerHTML = "Редактировать";
		btnEdit.setAttribute("data", index);
		btnEdit.onclick = editWorker;

		let btnDelete = document.createElement('button');
		btnDelete.className = "btnDel btn btn-dark btn-sm";
		btnDelete.innerHTML = "Удалить";
		btnDelete.setAttribute("data", index);
		btnDelete.onclick = deleteWorker;


		tr.appendChild(tdName);
		tr.appendChild(tdDate);
		tr.appendChild(tdPosition);
		tr.appendChild(tdSalary);
		tr.appendChild(tdBtnEdit).appendChild(btnEdit);
		tr.appendChild(tdBtnEdit).appendChild(btnDelete);

		$('#tableInfo').append(tr);
	}
	else {
		let workerName = worker.find(".name");
		workerName.html(workers[index]["name"]);

		let workerData = worker.find(".date");
		workerData.html(workers[index]["date"]);

		let workerPosition = worker.find(".position");
		workerPosition.html(workers[index]["position"]);

		let workerSalary = worker.find(".salary");
		workerSalary.html(workers[index]["salary"]);


		$("#modal-btn-add").removeAttr("data");
	}

}

function editWorker() {

	let data = $(this).attr('data');
	//console.log(data);
	//show modal
	$("#modal-add-workers").modal('show');
	$("form #name").val(workers[data]['name']);
	$("form #date").val(workers[data]['date']);
	$("form #position").val(workers[data]['position']);
	$("form #salary").val(workers[data]['salary']);
	$("#modal-btn-add").attr("data", data);

}

function deleteWorker() {
	$(this).parents("td").parents(".worker").remove();
	let data = $(this).attr("data");
	delete workers[data];
	setWorkers(workers[data]);
	//console.log("Удалил...");
}

