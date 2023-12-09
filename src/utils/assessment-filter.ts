import {
  TBaseBobotById,
  TGetAttendances,
  TLabelAssessment,
  TLabelPresence,
  TValueAssessment,
} from "@/types/componentTypes";

export const assessmentAverage = (
  id: string,
  label: TLabelAssessment,
  bobot: TBaseBobotById,
  assessments?: TValueAssessment[]
): number | string => {
  const filterByStudentIdAndType = assessments?.filter((assessment) => {
    return assessment.studentId === id && assessment.type === label;
  });

  const mapByScore = filterByStudentIdAndType?.map((assessment) => {
    return assessment.score;
  });

  const lengthScore = mapByScore?.length!;
  const reduceScore = mapByScore?.reduce(
    (accumulator, current) => accumulator + current,
    0
  )!;
  const devideScore = reduceScore / lengthScore;
  const labelToLowerCase = label.toLowerCase();
  const fixedBobot = bobot.bobot[labelToLowerCase];
  const multiply = devideScore * fixedBobot;

  return !multiply ? "-" : multiply;
};

export const mapPresenceByStatus = (
  id: string,
  status: TLabelPresence,
  attendances?: TGetAttendances[]
) => {
  const filterByStudentId = attendances?.filter((presence) => {
    return presence.studentId === id;
  });

  const mapByStatus = filterByStudentId?.map((presence) => {
    return presence.status;
  });

  return mapByStatus?.filter((presence) => {
    return presence === status;
  });
};
