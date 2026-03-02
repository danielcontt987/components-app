import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import MenuItem from '@/presentation/menu/MenuItem'
import ThemedView from '@/presentation/shared/ThemedView'
import { View } from 'react-native'

const ComponentApp = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map((route, idx) => (
            <MenuItem
                key={route.title}
                title={route.title}
                icon={route.icon}
                name={route.name}
                isFirst={ idx === 0 }
                isLast={ idx === animationMenuRoutes.length - 1}
            ></MenuItem>
        ))
      }
      <View className='my-5'/>
      {
        uiMenuRoutes.map((route, idx) => (
            <MenuItem
                key={route.title}
                title={route.title}
                icon={route.icon}
                name={route.name}
                isFirst={ idx === 0 }
                isLast={ idx === animationMenuRoutes.length - 1}
            ></MenuItem>
        ))
      }
      <View className='my-5'/>
      {
        menuRoutes.map((route, idx) => (
            <MenuItem
                key={route.title}
                title={route.title}
                icon={route.icon}
                name={route.name}
                isFirst={ idx === 0 }
                isLast={ idx === animationMenuRoutes.length - 1}
            ></MenuItem>
        ))
      }
    </ThemedView>
  )
}

export default ComponentApp