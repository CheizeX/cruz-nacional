import { FC, useCallback } from 'react';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../atoms/Text/Text';
import { ContainerWithOutTags } from '../../../molecules/ContainerWithOutTags/ContainerWithOutTags';
import { ICreateTagProps } from './UserCreateTags.interface';
import {
  ContainerTags,
  ContainerChecked,
} from '../EditUserTag/EditUserTag.styled';

export const UserCreateTags: FC<ICreateTagProps> = ({
  setOpenNewUser,
  setUserActive,
  setUsers,
  setContainerTags,
  titleHeader,
  containerTags,
}) => {
  const handlerUserActiveTag = (arg: string, num: number, title: string) => {
    setUserActive(num);
    setOpenNewUser(arg);
    setUsers(title);
  };
  const clearTagsCrearUser = useCallback(
    (indexToDelete: number) =>
      setContainerTags((_containerTags: any) =>
        _containerTags
          ?.filter(
            (v: unknown, i: number, a: any) =>
              a.findIndex(
                (t: unknown) => JSON.stringify(t) === JSON.stringify(v),
              ) === i,
          )
          .filter((_: string, index: number) => indexToDelete !== index),
      ),
    [setContainerTags],
  );
  return (
    <>
      <div>
        <Text color="black">
          Total asignadas:{' '}
          {`${
            containerTags
              ? containerTags?.filter(
                  (v, i, a) =>
                    a.findIndex(
                      (t) => JSON.stringify(t) === JSON.stringify(v),
                    ) === i,
                ).length
              : 0
          }`}
        </Text>
        <button
          type="button"
          onClick={() =>
            handlerUserActiveTag('Modificar Etiquetas', 1, `${titleHeader}`)
          }>
          <SVGIcon iconFile="/icons/pen.svg" />
        </button>
      </div>
      <ContainerTags>
        {containerTags?.filter(
          (v, i, a) =>
            a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
        ) && containerTags.length === 0 ? (
          <ContainerWithOutTags />
        ) : (
          containerTags
            ?.filter(
              (v, i, a) =>
                a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) ===
                i,
            )
            .map(({ name, color }, index) => (
              <ContainerChecked key={index} color={color}>
                <span>{name}</span>
                <button type="button" onClick={() => clearTagsCrearUser(index)}>
                  <SVGIcon iconFile="/icons/times.svg" />
                </button>
              </ContainerChecked>
            ))
        )}
      </ContainerTags>
    </>
  );
};
