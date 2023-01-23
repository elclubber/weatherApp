import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCity, selectWeatherData } from '../store/selectors';

const Content = ({}) => {
    const selectedCity = useSelector(selectCity);
    const selectedWeatherData = useSelector(selectWeatherData);

    useEffect(() => {
        // Perform some action when selectedData changes
        console.log(selectedCity);
      }, [selectedCity]);

    return (
        <>
            <div className='resume'>{selectedCity}</div>
            <div className='details'>test</div>
            <div className='map'>map</div>
        </>
    );
}

export default Content;