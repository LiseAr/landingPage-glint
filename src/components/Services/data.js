
import FormatPaintIcon from '@material-ui/icons/FormatPaint'
import GroupsIcon from '@material-ui/icons/Group'
import SettingsIcon from '@material-ui/icons/Settings'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import ImageIcon from '@material-ui/icons/Image'
import ImportExportIcon from '@material-ui/icons/ImportExport'

const iconStyle = {
  color: '#0a80c2',
  width: 60,
  height: 60,
}

export const data = [

  {
    title: 'Frontend',
    description: 'Development of beautiful, clean and optimized front-end interfaces that care about your user\'s usability and the impact it can have on him',
    icon: <FormatPaintIcon style={iconStyle} />
  },
  {
    title: 'Backend',
    description: 'We will build your API to be optimized and efficientWe build APIs for optimized and efficient that using the best technologies to handle large number of requests',
    icon: <ImportExportIcon style={iconStyle} />
  },
  {
    title: 'Server Side',
    description: 'Configure all environment to put your website on. from optimized servers for resource-intensive projects to simple servers for static pages',
    icon: <SettingsIcon style={iconStyle} />
  },
  {
    title: 'Projects',
    description: 'We help people with brilliant ideas evolve their ideas into a complete project',
    icon: <ShowChartIcon style={iconStyle} />
  },
  {
    title: 'Web Design',
    description: 'Modern and responsive designs optimized to provide a better experience for your users',
    icon: <ImageIcon style={iconStyle} />
  },
  {
    title: 'Teams',
    description: 'We train teams in scrum methodologies, taking inconsistent and time-consuming projects to well-structured, launchable projects with continuous delivery',
    icon: <GroupsIcon style={iconStyle} />
  }
]

