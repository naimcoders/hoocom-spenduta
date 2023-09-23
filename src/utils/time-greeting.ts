interface GreetingTimeProps {
  morning: number
  noon: number
  afternoon: number
  night: number
}

export const timeGreeting = (): string => {
  const { morning, noon, afternoon, night }: GreetingTimeProps = {
    morning: 5, noon: 11, afternoon: 15, night: 19
  }
  
  const date = new Date()
  const hour = date.getHours()

  const greetingWord: string =
    hour >= morning && hour < noon ? 'pagi' :
    hour >= noon && hour < afternoon ? 'siang' :
    hour >= afternoon && hour < night ? 'sore' : 'malam'

  return greetingWord
}