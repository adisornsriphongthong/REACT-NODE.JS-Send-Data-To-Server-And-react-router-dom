import React from 'react'

const adisorn = () => {

    async function handleSubmit(e) {
        e.preventDefault();

        await sendToAdisorn();
    }

    async function sendToAdisorn() {
        try {
            const resposne = await fetch('http://localhost:3000/api1', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({Data: 'Completed to send Adisorn'})
            })

            console.log(resposne);
        } catch (error) {
            
        }
    }

  return (
    <div>
      Contact to Adisorn
      <form onSubmit={handleSubmit}>
        <button>send</button>
      </form>
    </div>
  )
}

export default adisorn
