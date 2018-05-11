<template>
  <p-dash-layout title="New Layer">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">New Layer</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">Nome</label>
                  <input type="email" class="form-control" id="inputName" placeholder="Nome">
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">Theme</label>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputDescription">Description</label>
                <textarea class="form-control" id="inputDescription" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="inputReference">Reference</label>
                <input type="text" class="form-control" id="inputReference" placeholder="">
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Radios" id="Radios1" value="adress" checked>
                  <label class="form-check-label" for="Radios1">
                    Adress
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Radios" id="Radios2" value="coordinates">
                  <label class="form-check-label" for="Radios2">
                    Coordinates
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="fileUpload">File Input</label>
                <input type="file" class="form-control-file" id="fileUpload">
              </div>

            </form>
            </p>
            <div class="row">
              <div class="col align-self-end">
                <a href="#" class="btn btn-primary" @click="Upload()">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dvCSV"> teste</div>
    </div>
  </p-dash-layout>
</template>

<script>
  import DashLayout from '@/views/layouts/dashboard'

  export default {
    name: "newLayer",
    components: {
      "p-dash-layout": DashLayout
    },
    methods: {
      Upload() {
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
          if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
              var table = document.createElement("table");
              var rows = e.target.result.split("\n");
              for (var i = 0; i < rows.length; i++) {
                var row = table.insertRow(-1);
                var cells = rows[i].split(",");
                for (var j = 0; j < cells.length; j++) {
                  var cell = row.insertCell(-1);
                  cell.innerHTML = cells[j];
                }
              }
              var dvCSV = document.getElementById("dvCSV");
              dvCSV.innerHTML = "";
              dvCSV.appendChild(table);
            }
            reader.readAsText(fileUpload.files[0]);
          } else {
            alert("This browser does not support HTML5.");
          }
        } else {
          alert("Please upload a valid CSV file.");
        }


      },

    }
  }


</script>

<style lang="sass" scoped>

</style>
