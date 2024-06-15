import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Fragment } from 'react'
import { Tabs } from 'expo-router'
import home from '../../assets/images/home.png'
import saved from '../../assets/images/bookmark.png'
import profile from '../../assets/images/profile.png'
import search from '../../assets/images/search.png'

const TabIcon = ({ icon, color }) => {
    return (
      <View>
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          style={{ height: 18, width: 18 }}
        />
      </View>
    );
  };

const TabsLayout = () => {
  return (
    <Fragment>
        <Tabs
            screenOptions={{
                tabBarStyle: {
                  height: 75,
                },
              }}
        >
            <Tabs.Screen 
                name='Feed' 
                options={{ 
                        title: 'Feed',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                              icon={home}
                              color={color}
                              name="Feed"
                              focused={focused}
                            />
                          ),
                    }} 
            />
            <Tabs.Screen 
                name='Search' 
                options={{ 
                    title: 'Search',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={search}
                            color={color}
                            name="Search"
                            focused={focused}
                        />
                        ),
                }} 
            />
            <Tabs.Screen 
                name='Saved' 
                options={{ 
                    title: 'Saved',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={saved}
                            color={color}
                            name="Saved"
                            focused={focused}
                        />
                        ),
                }} 
            />
            <Tabs.Screen 
                name='Profile' 
                options={{ 
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                        ),
                }} 
            />
        </Tabs>
    </Fragment>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})