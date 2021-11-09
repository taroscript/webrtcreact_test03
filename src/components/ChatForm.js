import React from 'react';

export default function ChatForm(props) {

  const handleAdd = props.handleAdd;

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("e.target.message.value",e.target.message.value);
    const data = {
      message: e.target.message.value
    }

    handleAdd(data);

  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 p-3">

            <div className="form-group">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  
                  <input type="text" name="message" className="form-control" id="message" placeholder="type your message"></input>
                </div>
                <div class="text-right">
                <input type="submit" value="update" className="btn btn-primary"></input>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}