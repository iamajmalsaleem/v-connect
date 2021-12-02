import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    return (
        <center style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
            <div> 
              <img 
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8W1G8hNdKEEXyPNkIOxY05iscOhHDHmJNQ&usqp=CAU" 
                alt = ""
                style = {{ marginBottom: 10 }}
                height = {200}
             />
            </div>
            <CircularProgress  />
        </center> 
    )
}

export default Loading
