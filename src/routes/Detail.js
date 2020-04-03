import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <div className="detail__data">
            <div className="detail__header">
              <p className="detail__title">{location.state.title}</p>
              <p className="detail__subtitle">{location.state.subtitle}</p>
            </div>
            <div className="detail_info">
              <span>자세한 줄거리</span>
              <p className="detail__summary">{location.state.summary}</p>
            </div>
            <a
              href={location.state.link}
              target="_blank"
              rel="noopener noreferrer"
              title="예고편"
              className="detail__trailers"
            >
              <div className="detail__trailer">예고편 보러가기 ᕕ( ᐛ )ᕗ </div>
            </a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
