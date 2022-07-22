import {Card, CardTitle, CardBody, CardSubtitle, CardText} from "reactstrap"

const ProductCard = props => {
    console.log(props)
    const {title, description, category, image, rating } = props.cardData
    
    const color = (rating) =>{
        let ratingColor= ''

        if(rating<3){
            ratingColor = 'text-danger'
        } else if(3<rating && rating<4.5){
            ratingColor= 'text-warning'
        } else if (rating> 4.5){
            ratingColor = 'text-success'
        } else{
            ratingColor='text-muted'
        }

        return ratingColor
    }   
    
    const textColor = color(rating.rate)

    return (
    <div className="col">
        <Card className="d-flex flex-row CardCustom"> 
            <div>
                <img alt="Card img" src={image} className= "w-50 h-50"/>
            </div>
            <div>
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{category}</CardSubtitle>
                    <CardText className="d-block text">{description.substring(0,10)}</CardText>
                    <CardSubtitle className="mb-2" tag="h6"><p className={`${textColor}`}>{rating.rate}</p></CardSubtitle>
                </CardBody>
            </div>
            
        </Card>
    </div>)
}

export default ProductCard