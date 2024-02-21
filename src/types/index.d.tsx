import { AlertProps} from "@chakra-ui/react";

export type StrapiIconType = {
  data: {
    attributes: {
      name: string,
      alternativeText: string | null
      caption: string | null 
      width: number
      height: number
      url: string | null
    }
  } | null
}


export type LinkNodeType = {
  name: string; link: string, children?: LinkNodeType[]
}

export type ChakraColorType = {
  [key: string]: { [key: string]: string };
};

export type DialogProps = {
    type?: AlertProps["status"]
    message: string
  }


