import { Card, CardBody, CardTitle, CardText, Button, CardLink } from "reactstrap";
export default function Project() {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Workintech</CardTitle>

          <CardText>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </CardText>
          <Button>React</Button>
          <Button>Redux</Button>
          <Button>Axios</Button>
          <CardLink>Github</CardLink>
          <CardLink>View Site</CardLink>
        </CardBody>
      </Card>

      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Random Jokes</CardTitle>

          <CardText>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </CardText>
          <Button>React</Button>
          <Button>Redux</Button>
          <Button>Axios</Button>
          <CardLink>Github</CardLink>
          <CardLink>View Site</CardLink>
        </CardBody>
      </Card>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Journey</CardTitle>

          <CardText>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </CardText>
          <Button>React</Button>
          <Button>Redux</Button>
          <Button>Axios</Button>
          <CardLink>Github</CardLink>
          <CardLink>View Site</CardLink>
        </CardBody>
      </Card>
    </>
  );
}
