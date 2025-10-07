import './index.css'
import { Component } from 'react';


class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSegment: props.initialActive || 'Near By',
    };

    this.segments = [
      { label: 'Near By', value: 'Near By' },
      { label: '10 KM', value: '10 KM' },
      { label: 'All', value: 'All' },
    ];
  }

  handleSegmentClick(segmentValue) {
    this.setState({ activeSegment: segmentValue });
  }

  getBorderRadiusClasses() {
    return 'rounded-full';
    } 

  getActiveClasses(segmentValue) {
    const { activeSegment } = this.state;
    return activeSegment === segmentValue
      ? 'bg-black text-white dark:bg-white dark:text-black'
      : 'bg-transparent text-black dark:text-white';        
  }

  render() {
    const { activeSegment } = this.state;
    const baseSegmentClasses = 'flex-1 md:py-2 py-1 text-center transition-colors duration-200 ease-in-out font-semibold text-lg focus:outline-none text-sm';

    return (
        <div className="md:mx-auto md:m-4 mx-8 flex bg-white rounded-full shadow-lg shadow-gray dark:shadow-gray-900/50 max-w-lg overflow-hidden border-2 border-black-700 dark:border-black-700">
          {this.segments.map((segment, index) => (
            <button
              key={segment.value}
              className={`${baseSegmentClasses} ${this.getBorderRadiusClasses(index)} ${this.getActiveClasses(segment.value)}`}
              onClick={() => this.handleSegmentClick(segment.value)}
              aria-pressed={activeSegment === segment.value}
              aria-label={`Select ${segment.label}`}
            >
              {segment.label}
            </button>
          ))}
        </div>
    );
  }
}

export default Banner
