export default function TodoEdit({title, click, change}) {
    return(
        <div class="input-group mb-3 w-50">
            <input type="text" value={title} onChange={change}></input>
            <div class="input-group-prepend">
                <button  type="button" onClick={click}>Update</button>
            </div>
        </div>
    )
}