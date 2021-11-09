import React from 'react';


export default function ChatList(props) {

  const texts = props.texts

  const msg_cotainer_you = {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '10px',
    borderRadius: '25px',
    backgroundColor: '#82ccdd',
    padding: '10px',
    position: 'relative',
  }
  const msg_cotainer_me = {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: '10px',
    borderRadius: '25px',
    backgroundColor: '#78e08f',
    padding: '10px',
    position: 'relative'
  }
  const timeStyle_me = {
    position: 'absolute',
    right:  0,
    //bottom: '-15px',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '5px'
  }
  const timeStyle_you = {
    position: 'absolute',
    left:  0,
    //bottom: '-15px',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '5px'
  }
  
  const ul = {
    listStyle: 'none'
  }
  const bodyStyle = {
    height: '100%',
    width: '100%',
    margin: '0',
    background: '#7F7FD5',
    background: '-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
    background: 'linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
    borderRadius: '25px',
    height: '400px',
    overflowY: 'scroll'
  }

  

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          
            <div style={bodyStyle} id="scroll-inner" className="col-md-12 col-xl-6">
              <ul style={ul}>
                {
                  texts.map((text, index) => {

                    if (text.isMe) {
                      return <div className="d-flex justify-content-end mb-4">
                        <li key={index}>
                          <div style={msg_cotainer_me}>{text.nickname} : {text.message}</div>
                          <div style={timeStyle_me}>{text.created_at}</div>
                        </li>
                      </div>
                    } else {
                      return <div className="d-flex justify-content-start mb-4">
                        
                        <li key={index}>
                          <div style={msg_cotainer_you}>{text.nickname} : {text.message}</div>
                          <div style={timeStyle_you}>{text.created_at}</div>
                        </li>
                      </div>
                    }
                  })
                }
              </ul>
            </div>
          
        </div>
      </div>

    </>
  );


}