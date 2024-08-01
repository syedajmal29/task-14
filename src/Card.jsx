import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BasicExample({title,price,button,rating,sale,addcart,cart}) {
  

  return (
    
    <div className='col col-lg-3 col-md-6 col-sm-6 col-xs-12'>
          <div className="container d-flex justify-content-center gap-1 mt-2 flex-wrap">
    <Card style={{ width: '18rem' }} className='text-center m-2'>
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <span class=" bg-dark position-absolute top-0 end-0 rounded-pill m-2">
                            {
sale &&  <span class="badge bg-dark text-white m-1">Sale</span>
                            }
                        </span>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            
        {
            rating === 5
            ?
             <img width="28" height="28" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/> 

            : <span className='m-4'></span>
  
        }
        {
            rating === 5
            ?
             <img width="28" height="28" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>

            : <span className='m-4'></span>
  
        }
        {
            rating === 5
            ?
             <img width="28" height="28" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>

            : <span className='m-4'></span>
  
        }
        {
            rating === 5
            ?
             <img width="28" height="28" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>

            : <span className='m-4'></span>
  
        }
        {
            rating === 5
            ?
             <img width="28" height="28" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>

            : <span className='m-4'></span>
  
        }
         </Card.Text>
        <Card.Text>
           { price.map((prices)=>(
 
    prices.enable ?(<span>{prices.cost}</span>): (<del className='text-secondary'>{prices.cost}</del>)

            ))}
       
        </Card.Text>
        <Button variant="btn btn-outline-dark" onClick={cart && addcart}>{button}</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    
  );
}

export default BasicExample;