import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import AccordionItemStyles from './AccordionItem.styles';
import {useTheme} from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export type AccordionItemProps = PropsWithChildren<{
  wrapperStyles?: any;
  headerStyles?: any;
  bodyStyles?: any;
  title?: string;
  accordionIcon?: React.ReactNode;
  defaultAccordionState?: 'open' | 'closed';
  onToggle?: (isOpen: boolean) => void;
}>;

function AccordionItem({
  children,
  title,
  wrapperStyles = {},
  bodyStyles = {},
  headerStyles = {},
  accordionIcon,
  defaultAccordionState = 'closed',
  onToggle,
}: AccordionItemProps): JSX.Element {
  const {colors} = useTheme();
  const styles = AccordionItemStyles(colors);
  const [expanded, setExpanded] = useState(defaultAccordionState === 'open');
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  function toggleItem() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onToggle?.(!expanded);
    setExpanded(!expanded);
  }

  const body = <View style={bodyStyles || styles.accordBody}>{children}</View>;

  return (
    <View style={wrapperStyles || styles.accordContainer}>
      <TouchableOpacity
        style={[styles.accordHeader, expanded ? styles.accordExpanded : {}]}
        onPress={toggleItem}>
        <Text style={headerStyles || styles.accordTitle}>{title}</Text>
        {accordionIcon || (
          <Icon
            name={expanded ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color={colors.primary}
          />
        )}
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

export default AccordionItem;
