import React from 'react'

const jackson = () => {
    
    async function handleSubmit(e) {
        e.preventDefault();

        await sendToJackson();
    }


    async function sendToJackson() {
        try {
            const response = await fetch('http://localhost:3000/api1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'Data': 'Completed to send Jackson'})
            })

            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div>
      Contact to Jackson
      <form onSubmit={handleSubmit}>
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default jackson
