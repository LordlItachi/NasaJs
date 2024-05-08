import PropTypes from 'prop-types'

export default function Footer(props) {
  const {showModal,handleToggleModal , data} = props;
  return (
    <footer>
      <div className='bgGradient'></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>APOD Project </h1>
        </div>
        <div>
          <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
          </button>
        </div>
    </footer>
  )
}
Footer.propTypes = {
  showModal : PropTypes.bool,
  handleToggleModal : PropTypes.func
}
