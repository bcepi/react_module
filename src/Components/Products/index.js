import {Card, CardTitle, CardBody, CardSubtitle, CardText} from "reactstrap"

const ProductCard = props => {
    console.log(props)
    const {title, description, category, image, rating } = props.cardData
        
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
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{rating.rate}</CardSubtitle>
                </CardBody>
            </div>
            
        </Card>
    </div>)
}

export default ProductCard