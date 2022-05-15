import { SessionPageTemplate } from "../../templates/sessions-page";

const SessionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <SessionPageTemplate
      
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

SessionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SessionPagePreview