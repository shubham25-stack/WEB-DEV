function AddPlan(){
    return (
    <div class="container text-center">
  
  <div class="row">
    <div class="col-4">
        <input type="text" placeholder="Enter Plan" />
    </div>
    <div class="col-4">
        <input type="date"/>
    </div>
    <div class="col-2">
        <input type="time"/>
    </div>
    <div class="col-1">
    <button type="button" class="btn btn-outline-success">Add</button>    
    </div>
  </div>
</div>
    )
}

export default AddPlan;