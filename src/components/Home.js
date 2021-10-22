import React, { useEffect, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import './home.css';
import searchView from './searchView';



function Home(){
    const [data,setData]=useState([]);
    const [search,setSearch]=useState("");
    const inputEvent = (event) => {
     const data = event.target.value;
     setSearch(data); 
      
    };

    useEffect(() => {
    const getCovidData = async () => {
         await fetch ('./covidDetails.json')
        .then(res => res.json())
        .then(data => {
            setData(data.statewise)
        })
        console.log(data);
       
  
    }

   
      getCovidData();
     

    },[]);

    return (

       
      <>
           <div className="col-3 py-3 " >
           <input  type="text" placeholder=" Search By State" 
           value={search} onChange={InputEvent} />
            <searchView state={search}/>
           </div>
          
          { 

          data.map((item) => (
         
           <Row >
           <Col>
           <Card className="card my-3 p-3 px-6" bg="success" style={{width:'18rem'}} >
            
            <Card.Body >
                <Card.Title>
                    <h4>our country</h4>
                    </Card.Title>
                <Card.Text>
                    <h5>INDIA</h5>
                </Card.Text>
                
                           

            </Card.Body>
            </Card>
            </Col>
            
            
            <Col>
           <Card className="my-3 p-3 px-6"  bg="danger" style={{width:'18rem'}} >
            
            <Card.Body >
                <Card.Title>
                    <h4>TOTAL CASES</h4>
                    </Card.Title>
                <Card.Text>
                   <p>{item.confirmed}</p>
                </Card.Text>
                
             </Card.Body>
            </Card>
            </Col>

           <Col>
           <Card className="my-3 p-3 px-6" bg="warning" style={{width:'18rem'}} >
            <Card.Body >
                <Card.Title>
                    <h4>ACTIVE CASES</h4>
                    </Card.Title>
                <Card.Text>
                    <h5>{item.active}</h5>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            
             
            <Row>
            <Col>
           <Card className="my-3 p-3 px-6" bg="info" style={{width:'18rem'}} >
            <Card.Body >
                <Card.Title>
                    <h4>RECOVERED </h4>
                    </Card.Title>
                <Card.Text>
                    <h5>{item.recovered}</h5>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col>
           <Card className="my-3 p-3 px-6" bg="dark" style={{width:'18rem'}} >
            <Card.Body >
                <Card.Title>
                    <h4>DEATH</h4>
                    </Card.Title>
                <Card.Text>
                    <h5>{item.deaths}</h5>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col>
           <Card className="my-3 p-3 px-6 text-white " bg="success" style={{width:'18rem'}} >
            <Card.Body >
                <Card.Title>
                    <h4>LAST UPDATED</h4>
                    </Card.Title>
                <Card.Text>
                    <h5>{item.lastupdatedtime}</h5>
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            </Row>
        </Row>
            ))
        }     
        </>
      
    
    
    )
}

export default Home
